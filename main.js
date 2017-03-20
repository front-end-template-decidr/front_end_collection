 main.js

 render() {
    return(
      <div>
        <Nav />

        <searchbarflex>

          <div id="search">
            <div id="zipBar" >
              <form action="POST" >
                <label for="zipCode" className="toggleHolderText "></label>
                <input className="zipInput" type="text" name="zip" onChange={this.handleChange.bind(this)} value={this.state.search.zip} maxLength="5" placeholder="ENTER ZIP NOW." />
              </form>

            </div>

            <div className="toggleHolder" id="toggleBar" > <h3 className="toggleHolderText">Restaurant</h3>
              <label className="switch">
                <input type="checkbox" />
                <div className="slider round"></div>
              </label>
                <h3 className="toggleHolderText">Bars</h3>
            </div>
          </div>

          <div >
            <label for="submitButton" placeholder="DECID"></label>
            <input id="submitButton" type="submit" value="" onClick={this.findPlaces.bind(this)} />
          </div>

      </searchbarflex>




        <Place place={this.state.place} />
      </div>
    )
  }
}
