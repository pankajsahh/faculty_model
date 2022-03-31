import { MDBIcon, MDBInputGroup } from "mdb-react-ui-kit";
import { useContext } from "react";
import Context from "../context/Context";

const SearchEngine = () => {
  const { setsearchterm, searchterm } = useContext(Context);

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
          <input
            value={searchterm}
            onChange={handelchangesearch}
            className="form-control"
            type="text"
            placeholder="Search Faculty By Name"
          />
        </MDBInputGroup>
      </div>
    </>
  );
};
export default SearchEngine;
