import { Select, Popover, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { Icon } from "@iconify/react";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";

function FilterOptions({ organizations, setFilter }) {
  const form = useForm({
    initialValues: {
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    },
  });

  let value = [];

  const [runFilter, setRunFilter] = useState(false);

  useEffect(() => {
    Object.values(form.values).forEach((item) => {
      if (item) value.push(item);
      if (runFilter) {
        if (value.length > 1) {
          alert(
            "Cannot filter by two fields, click reset and choose one field to continue"
          );
        } else if (value.length === 1) {
            if(form.values.organization){
          setFilter(form.values.organization.split(" ")
          .map((item: string) =>
            item.replace(item[0], item[0].toLowerCase())
          )
          .join("-"))
            }
          else if(form.values.date) setFilter(new Date(form.values.date).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
            day: "numeric",
          }))

          else setFilter(value[0])
        }
        setRunFilter(false)
        value.splice(0, value.length)
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    form.values.date,
    form.values.email,
    form.values.organization,
    form.values.phoneNumber,
    form.values.status,
    form.values.username,
    runFilter,
  ]);

  return (
    <Popover classNames={{dropdown: "filterDropdown"}} position="bottom" shadow="md">
      <Popover.Target>
      <Icon
          style={{ cursor: "pointer" }}
          icon="material-symbols:filter-list"
        />
      </Popover.Target>
      <Popover.Dropdown>
      <div className="filterFieldGroup">
          <Select
            classNames={{ label: "filterLabel", input: "filterInputBorder" }}
            label="Organization"
            searchable
            nothingFound="No options"
            placeholder="Select"
            data={organizations}
            {...form.getInputProps("organization")}
          />
          <TextInput
            classNames={{ label: "filterLabel", input: "filterInputBorder" }}
            placeholder="User"
            label="Username"
            {...form.getInputProps("username")}
          />
          <TextInput
            classNames={{ label: "filterLabel", input: "filterInputBorder" }}
            placeholder="Email"
            label="Email"
            {...form.getInputProps("email")}
          />
          <DatePicker
            classNames={{ label: "filterLabel", dropdown: "datePickerDropdown", input: "filterInputBorder" }}
            placeholder="Date"
            label="Date"
            {...form.getInputProps("date")}
          />
          <TextInput
            classNames={{ label: "filterLabel", input: "filterInputBorder" }}
            placeholder="Phone Number"
            label="Phone Number"
            {...form.getInputProps("phoneNumber")}
          />
          <Select
            classNames={{ label: "filterLabel", input: "filterInputBorder" }}
            label="Status"
            placeholder="Select"
            data={[]}
            disabled
            {...form.getInputProps("status")}
          />
          <div className="filterButtonGroup">
            <button onClick={() => {
              setFilter("")
              form.reset()
            }} className="resetBtn">
              <span>Reset</span>
            </button>
            <button onClick={() => setRunFilter(true)} className="filterBtn">
              <span>Filter</span>
            </button>
          </div>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
}

export default FilterOptions;
