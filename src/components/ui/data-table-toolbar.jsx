import * as React from "react"
import PropTypes from 'prop-types'
import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "@/components/ui/data-table-view-options"
import { DataTableFacetedFilter } from "@/components/ui/data-table-faceted-filter"

export function DataTableToolbar({
  table,
  filterableColumns = [],
  searchableColumns = [],
}) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {searchableColumns.length > 0 &&
          searchableColumns.map(
            (column) =>
              table.getColumn(column.id) && (
                <Input
                  key={column.id}
                  placeholder={`Filter ${column.title}...`}
                  value={(table.getColumn(column.id)?.getFilterValue()) ?? ""}
                  onChange={(event) =>
                    table.getColumn(column.id)?.setFilterValue(event.target.value)
                  }
                  className="h-8 w-[150px] lg:w-[250px]"
                />
              )
          )}
        {filterableColumns.length > 0 &&
          filterableColumns.map(
            (column) =>
              table.getColumn(column.id) && (
                <DataTableFacetedFilter
                  key={column.id}
                  column={table.getColumn(column.id)}
                  title={column.title}
                  options={column.options}
                />
              )
          )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}

DataTableToolbar.propTypes = {
  table: PropTypes.object.isRequired,
  filterableColumns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired
        })
      ).isRequired
    })
  ),
  searchableColumns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  )
} 