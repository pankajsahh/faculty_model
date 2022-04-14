import { MDBIcon, MDBInput, MDBInputGroup } from "mdb-react-ui-kit";
import { useContext } from "react";
import Context from "../context/Context";
import './searchengine.css'
const SearchEngine = () => {
  const {setsearchterm, searchterm } = useContext(Context);

  function handelchangesearch(e) {
    setsearchterm(e.target.value);
  }

  return (
    <>
      <div className="engine">
        <MDBInputGroup
          className="mb-3"
          noBorder
          textBefore={<MDBIcon fas icon="search" />}
        >
          <MDBInput
          label='Search by name or department'
            value={searchterm}
            onChange={handelchangesearch}
            type="text"
            style={{width: 1000}}
          />
        </MDBInputGroup>
      </div>
    </>
  );
};
export default SearchEngine;
