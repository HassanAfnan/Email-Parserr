import React from "react";
import Header from "../../components/Header";
import TypeAnimation from "react-type-animation";

const Home = () => {
  return (
    <>
      <Header />
      <div className="main-home">
        <div className="main-home-typing">
          <div className="main-typing-1">
            <h1>Email parser for</h1>
            <TypeAnimation
              style={{ width: "20em" }}
              cursor={true}
              sequence={[
                "Salesforce",
                2000,
                "Google Sheets",
                2000,
                "Your CRM",
                2000,
                "Shopify",
                2000,
                "Sharepoint",
                2000,
                "Dynamics CRM",
                2000,
                "Xero",
                2000,
                "Excel",
                2000,
                "",
              ]}
              wrapper="h1"
              repeat={Infinity}
            />
          </div>
          <p>
            Extract data from email, automate your business and eliminate
            unnecessary manual data entry
          </p>
        </div>
      </div>

      {/* <div>
        <div>
          <Typing loop speed={50}>
              <Delay ms={500} />
              <p>Hello i am afnan</p>
              <Typing.Backspace count={10} delay={1000} />
              <p>Checkmarks</p>
          </Typing>
        </div>
    </div> */}
    </>
  );
};

export default Home;
