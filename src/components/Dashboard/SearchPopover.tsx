import { Icon } from '@iconify/react'
import { Popover } from "@mantine/core";


function SearchPopover() {
  return (
    <Popover position="bottom" shadow="md">
    <Popover.Target>
    <button className="tabletSizeBtn">
            <Icon icon="material-symbols:search" color="white" />
          </button>
    </Popover.Target>
    <Popover.Dropdown>
    <div className="searchBoxPopover">
          <input type="text" placeholder="Search for anything" />
          <button>
            <Icon icon="material-symbols:search" color="white" />
          </button>
        </div>
    </Popover.Dropdown>
  </Popover>
  )
}

export default SearchPopover