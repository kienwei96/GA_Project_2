import MaterialTable from "@material-table/core";
import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Info from "@material-ui/icons/Info";
import { useHistory, useParams } from "react-router-dom";
import "@fontsource/mulish/300.css";
import { Typography } from "@mui/material";

const tableIcons = {
    Add: AddBox,
    Check: Check,
    Clear: Clear,
    Delete: DeleteOutline,
    DetailPanel: ChevronRight,
    Edit: Edit,
    Export: SaveAlt,
    Filter: FilterList,
    FirstPage: FirstPage,
    Info: Info,
    LastPage: LastPage,
    NextPage: ChevronRight,
    PreviousPage: ChevronLeft,
    ResetSearch: Clear,
    Search: Search,
    SortArrow: ArrowUpward,
    ThirdStateCheck: Remove,
    ViewColumn: ViewColumn,
  };

export default function DataTable(props) {

    const data = props.data;
    const category = useParams().category;
    const history = useHistory();
    const filterData = data.filter(ele => ele.workhead === category)
    console.log("filterData is:", filterData);

      return (
        <Typography component="span">
      <div
        style={{
          position: "relative",
          width: "80%",
          maxWidth: "1800px",
          margin: "0 auto",
          marginTop: "1%",
          boxShadow: "none",
          zIndex: 0,
        }}
      >
          <MaterialTable
            style={{ boxShadow: "none", marginBottom: "3%", }}
            onRowClick={(event, rowData) => {history.push(`/search/bcaContractor/${rowData.id}`);  window.scrollTo(0, 0)}}
            icons={tableIcons}
            columns={[
                {
                  title: "UEN No.",
                  field: "uen",
                  align: "center",
                  defaultSort: "desc",
                },
                {
                    title: "Workhead",
                    field: "workhead",
                    align: "center",
                  },
                {
                  title: "Company Name",
                  field: "name",
                  align: "center",
                },
                {
                  title: "License Expiry Date",
                  field: "expiry",
                  align: "center",
                },
              ]}
            data={filterData}
            title="Contractors list"
            options={{
                    search:false,
                    icons:false,
                    exportButton: true,
                    filtering: false,
                    pageSize: 5,
                    pageSizeOptions: [5, 10, 50, 100, 500],
                    thirdSortClick: false,
                    draggable: false,
                    maxBodyHeight: "70vh",
                    tableLayout: "auto",
                    showFirstLastPageButtons: false,
                    headerStyle: {
                        position: "sticky",
                        height: 0,
                        background: "white",
                    },
                }}
        />
      </div>
      </Typography>

      )


}