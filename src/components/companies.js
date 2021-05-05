
  function Companies(props) {
      return (
          <div>
              <p>
                { props.symbol }
              </p>
              <p>
                { props.name }
              </p>
              <p>
                { props.industry }
              </p>
          </div>
      );
  }

export default Companies;