import { Column } from "react-table";

const usersColumn: Array<Column<UsersColumn>> = [
  {
    Header: "ORGANIZATION",
    accessor: "orgName",
  },
  {
    Header: "USERNAME",
    accessor: "userName",
  },
  {
    Header: "EMAIL",
    accessor: "email",
  },
  {
    Header: "PHONE NUMBER",
    accessor: "phoneNumber",
  },
  {
    Header: "DATE JOINED",
    accessor: "createdAt",
  },
  {
    Header: "STATUS",
    accessor: "lastActiveDate",
  },
];

export interface UsersColumn {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  lastActiveDate: string;
}

export default usersColumn