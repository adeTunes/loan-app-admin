import { useMemo, useState } from "react";
import {
  TableInstance,
  useGlobalFilter,
  usePagination,
  UsePaginationInstanceProps,
  UsePaginationState,
  useRowSelect,
  UseSortByInstanceProps,
  useTable,
} from "react-table";
import usersColumn from "../../layout/usersColumn";
import VIewOptions from "./VIewOptions";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import FilterOptions from "./FilterOptions";
import Next from "./assets/next.svg";
import Previous from "./assets/previous.svg";
import { Select } from "@mantine/core";

export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UsePaginationInstanceProps<T> &
  UseSortByInstanceProps<T> & {
    state: UsePaginationState<T>;
  };

const usersData = [
  {
    createdAt: "2072-12-27T03:44:22.522Z",
    orgName: "labore-dolor-et",
    userName: "Wilburn.Rice",
    email: "Maverick.Hyatt83@gmail.com",
    phoneNumber: "(553) 208-0727 x31321",
    lastActiveDate: "2099-02-28T23:17:40.013Z",
    profile: {
      firstName: "Darian",
      lastName: "Rolfson",
      phoneNumber: "494-278-0946",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg",
      gender: "Male",
      bvn: "815809412",
      address: "Gusikowski Locks",
      currency: "NGN",
    },
    guarantor: {
      firstName: "Celine",
      lastName: "Monahan",
      phoneNumber: "1-482-227-3654 x71086",
      gender: "Male",
      address: "O'Hara Centers",
    },
    accountBalance: "496.00",
    accountNumber: "GWQUSEH1",
    socials: {
      facebook: "@lendsqr",
      instagram: "@lendsqr",
      twitter: "@lendsqr",
    },
    education: {
      level: "Bsc",
      employmentStatus: "Employed",
      sector: "FinTech",
      duration: "2 Years",
      officeEmail: "Edna4@yahoo.com",
      monthlyIncome: ["128.57", "118.07"],
      loanRepayment: "122.47",
    },
    id: "1",
  },
];

type UsersType = typeof usersData;

const UserTable = () => {
  const { data: usersRowData, isLoading } = useQuery<UsersType>(["users"], () =>
    axios("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then(({ data }) => {
        setOrganizations(
          data.reduce((acc, item) => {
            let orgName = item.orgName
              .split("-")
              .map((item: string) =>
                item.replace(item[0], item[0].toUpperCase())
              )
              .join(" ");
            acc.push({ value: orgName, label: orgName });
            return acc;
          }, [])
        );
        return data;
      })
      .catch((error) => error)
  );

  const [organizations, setOrganizations] = useState([]);

  const usersColumnData = useMemo(() => usersColumn, []);

  const usersRow = useMemo(
    () =>
      isLoading
        ? []
        : usersRowData.length > 0
        ? usersRowData.reduce((acc, item, idx) => {
            const date =
              (new Date(item.lastActiveDate) as any) - (new Date() as any);
            const phone = item.profile.phoneNumber;
            const dayJoined =
              new Date(item.createdAt).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
                day: "numeric",
              }) +
              " " +
              new Date(item.createdAt).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              });
            if (+date % 3 === 0)
              acc.push({
                ...item,
                phoneNumber: phone,
                lastActiveDate: "Inactive",
                createdAt: dayJoined,
              });
            else if (+date % 2 === 0)
              acc.push({
                ...item,
                phoneNumber: phone,
                lastActiveDate: "Active",
                createdAt: dayJoined,
              });
            else if (+date % 5 === 0)
              acc.push({
                ...item,
                phoneNumber: phone,
                lastActiveDate: "Blacklisted",
                createdAt: dayJoined,
              });
            else
              acc.push({
                ...item,
                phoneNumber: phone,
                lastActiveDate: "Pending",
                createdAt: dayJoined,
              });
            return acc;
          }, [])
        : [],
    [isLoading, usersRowData]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    state,
    setGlobalFilter,
    prepareRow,
  }: any = useTable(
    {
      columns: usersColumnData as any,

      data: usersRow as any,
    },
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns): any => {
        return [
          ...columns,

          {
            Header: "",

            Cell: ({ row }: any) => <VIewOptions rowDetails={row.original} />,
          },
        ];
      });
    }
  ) as TableInstanceWithHooks<object>;

  const { pageIndex, pageSize }: any = state;

  return (
    <div className="grid  grid-rows-[1fr_auto]">
      <div className="overflow-x-scroll">
        <table {...getTableProps()} className="bg-[white] w-full">
          <thead className=" text-[#514747]  font-normal">
            {headerGroups.map((headerGroups, idx) => (
              <tr key={idx} {...headerGroups.getHeaderGroupProps()}>
                {headerGroups.headers.map((columns, id) =>
                  columns.Header === "" ? (
                    <th
                    key={id}
                      style={{ background: "#fff" }}
                      {...columns.getHeaderProps()}
                      className="py-4 text-[#514747]"
                    >
                      {columns.render("Header")}
                    </th>
                  ) : (
                    <th
                    key={id}
                      {...columns.getHeaderProps()}
                      style={{
                        color: "#545F7D",
                        background: "#fff",
                        fontWeight: 600,
                        fontSize: "12px",
                        lineHeight: "14.08px",
                      }}
                      className="py-4 text-[#514747] pl-4 text-left font-normal"
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span style={{ whiteSpace: "nowrap" }}>
                          {columns.render("Header")}
                        </span>
                        <FilterOptions
                          organizations={organizations}
                          
                          setFilter={setGlobalFilter}
                        />
                      </span>
                    </th>
                  )
                )}
              </tr>
            ))}
          </thead>
          <tbody className="flex-1 overflow-auto" {...getTableBodyProps()}>
            {page.map((row, idx) => {
              prepareRow(row);
              return (
                <tr
                key={idx}
                  {...row.getRowProps()}
                  className=" border-y-[1px] border-y-[#F5F5F5] text-left"
                >
                  {row.cells.map((cell, id) => {
                    return cell.column.Header === "STATUS" ? (
                      <td key={id} {...cell.getCellProps()} className="tableData">
                        <span
                          style={{
                            background:
                              cell.value === "Inactive"
                                ? "#545f7d1f"
                                : cell.value === "Active"
                                ? "#39cd621f"
                                : cell.value === "Pending"
                                ? "#e9b2001f"
                                : "#e4033b1f",
                            color:
                              cell.value === "Inactive"
                                ? "#545f7d"
                                : cell.value === "Active"
                                ? "#39CD62"
                                : cell.value === "Pending"
                                ? "#E9B200"
                                : "#E4033B",
                            borderRadius: "100px",
                            padding: "11px 14px",
                            display: "flex",
                            justifyContent: "center",
                            fontWeight: 400,
                          }}
                        >
                          {cell.render("Cell")}
                        </span>
                      </td>
                    ) : cell.column.Header === "ORGANIZATION" ? (
                      <td
                      key={id}
                        style={{ whiteSpace: "nowrap", color: "#545f7dcc" }}
                        {...cell.getCellProps()}
                        className="tableData"
                      >
                        {cell.value
                          .split("-")
                          .map((item: string) =>
                            item.replace(item[0], item[0].toUpperCase())
                          )
                          .join(" ")}
                      </td>
                    ) : (
                      <td
                      key={id}
                        style={{ whiteSpace: "nowrap", color: "#545f7dcc" }}
                        {...cell.getCellProps()}
                        className="tableData"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="desktopPage">
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <p>Showing </p>
          <Select
            styles={{
              root: { width: "65px" },
              input: {
                background: "rgba(33, 63, 125, 0.1)",
                borderRadius: "4px",
                border: "none !important",
              },
              rightSection: {
                "& > *": { color: "#213F7D !important" },
              },
            }}
            value={String(pageSize)}
            data={["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]}
            onChange={(val) => {
              setPageSize(Number(val));
            }}
          />
          <p>out of {usersRowData?.length}</p>{" "}
          {/* {pageIndex + 1} of {pageOptions.length} */}
        </div>
        <div className="desktopBtn">
          <button
            className=""
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <img src={Previous} alt="" />
          </button>
          <span>
            {pageIndex + 1} of {pageOptions.length}
          </span>
          <button
            className=""
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <img src={Next} alt="" />
          </button>
        </div>
      </div>

      <div className="tabletPage">
        <button
          className=""
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <img src={Previous} alt="" />
        </button>
        <span>
          {pageIndex + 1} of {pageOptions.length}
        </span>
        <button className="" onClick={() => nextPage()} disabled={!canNextPage}>
          <img src={Next} alt="" />
        </button>
      </div>
    </div>
  );
};

export default UserTable;
