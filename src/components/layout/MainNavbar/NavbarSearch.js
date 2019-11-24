import React from "react";
import Dialog from "@material-ui/core/Dialog";
import SearchIcon from "@material-ui/icons/Search";
import Slide from "@material-ui/core/Slide";
import SearchBar from "./SearchBar";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import _ from "lodash";
import faker from "faker";

const initialState = { isLoading: false, results: [], value: "" };

const getResults = () =>
  _.times(5, () => ({
    title: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: faker.finance.amount(0, 100, 2, "$")
  }));

const source = _.range(0, 3).reduce(memo => {
  const name = faker.hacker.noun();

  // eslint-disable-next-line no-param-reassign
  memo[name] = {
    name,
    results: getResults()
  };

  return memo;
}, {});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default () => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [results, setResults] = React.useState([]);
  const [value, setValue] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  const handleSearchChange = (e, givanValue ) => {
    setIsLoading(true);
    setValue(givanValue.value);
    
    setTimeout(() => {
      // if (value.length < 1) {
      //   // console.log(givanValue.value);
      //   return setIsLoading(false), setValue(""), setResults([]);
      // }

      const re = new RegExp(_.escapeRegExp(value), "i");
      const isMatch = result => re.test(result.title);

      const filteredResults = _.reduce(
        source,
        (memo, data, name) => {
          const results = _.filter(data.results, isMatch);
          if (results.length) memo[name] = { name, results }; // eslint-disable-line no-param-reassign

          return memo;
        },
        {}
      );
      setIsLoading(false);
      setResults(filteredResults);
    }, 300);
  };

  return (
    <div className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
      {/* <div
        style={{
          width: "100%",
          padding: 1,
          paddingLeft: 20,
          paddingRight: 20,
          display: "flex",
          justifyContent: "space-between",
          color: "rgba(184,184,184,0.5)"
        }}
        onClick={() => handleClickOpen()}
        type="primary"
        icon="search"
      >
        <h5 style={{ marginTop: 15, color: "rgba(184,184,184,0.5)" }}>
          Search for books, assignments, past papers, news papers in 200 files
        </h5>
        <div style={{ marginTop: 17, marginLeft: 20 }}>
          <SearchIcon />
        </div>
      </div> */}
      <Grid.Column width={8}>
        <Search
          category
          loading={isLoading}
          onResultSelect={handleResultSelect}
          onSearchChange={_.debounce(handleSearchChange, 500, {
            leading: true
          })}
          results={results}
          value={value}
          {...this.props}
        />
      </Grid.Column>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <SearchBar handleClose={handleClose} />
      </Dialog>
    </div>
  );
};
