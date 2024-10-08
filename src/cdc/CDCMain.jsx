import React, { useEffect, useRef } from "react";
import "./CDCMain.css";
import './Navbar';
import cdcImage from '../assets/cdc.webp';
import Navbar from "./Navbar";
import Footer from './Footer';

const CDCMain = () => {
  const columnChartRef = useRef(null); // Reference to the chart div

  useEffect(() => {
    const loadGoogleCharts = () => {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/charts/loader.js";
      script.async = true;
      script.onload = () => {
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);
      };
      document.body.appendChild(script);
    };

    const drawChart = () => {
      const data = google.visualization.arrayToDataTable([
        ["Year", "Companies", { role: "style" }],
        ["2017-2018", 180, "#4169E1"],
        ["2018-2019", 160, "#4169E1"],
        ["2019-2020", 205, "#4169E1"],
        ["2020-2021", 176, "#4169E1"],
        ["2021-2022", 133, "#4169E1"],
        ["2022-2023", 157, "#4169E1"],
      ]);

      const view = new google.visualization.DataView(data);
      view.setColumns([
        0,
        1,
        {
          calc: "stringify",
          sourceColumn: 1,
          type: "string",
          role: "annotation",
        },
        2,
      ]);

      const options = {
        title: "",
        width: 1300,
        height: 550,
        bar: { groupWidth: "50%" },
        legend: { position: "none" },
        vAxis: {
          title: "Number of Companies",
          viewWindow: {
            min: 0,
            max: 250,
          },
        },
        hAxis: {
          title: "Academic Year",
        },
        titleTextStyle: {
          fontSize: 25,
          color: "#417341",
        },
      };

      const columnChart = new google.visualization.ColumnChart(
        columnChartRef.current
      );
      columnChart.draw(view, options);
    };

    loadGoogleCharts();
  }, []);

  const donutChartRef = useRef(null); // Changed ref name

  useEffect(() => {
    // Load the Google Charts library
    const loadGoogleCharts = () => {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/charts/loader.js";
      script.async = true;
      script.onload = () => {
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);
      };
      document.body.appendChild(script);
    };

    // Function to draw the Donut chart
    const drawChart = () => {
      const data = google.visualization.arrayToDataTable([
        ["Task", "Hours per Day"],
        ["Core Engineering", 40],
        ["Finance", 38],
        ["Software Development", 100],
        ["Consulting", 2],
        ["Trading", 7],
        ["Networking", 10],
        ["Automobile", 15],
        ["Educational", 4],
        ["Analytics", 25],
        ["Marketing", 18],
        ["R&D", 22],
        ["Healthcare", 8],
        ["Data Science", 33],
        ["Cyber Security", 8],
        ["Public Sector", 10],
        ["Others", 35],
      ]);

      const options = {
        title: "",
        pieHole: 0.4,
        titleTextStyle: {
          color: "#417341",
        },
      };

      const donutChart = new google.visualization.PieChart(
        donutChartRef.current
      );
      donutChart.draw(data, options);
    };

    // Call the function to load Google Charts
    loadGoogleCharts();
  }, []);

  const comboChartRef = useRef(null);

  useEffect(() => {
    const loadGoogleCharts = () => {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/charts/loader.js";
      script.async = true;
      script.onload = () => {
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawVisualization);
      };
      document.body.appendChild(script);
    };

    const drawVisualization = () => {
      const data = google.visualization.arrayToDataTable([
        [
          "Range of Gross Salary",
          "Number of Offers",
          "Number of Companies",
          "Average",
        ],
        ["Above 20", 95, 28, 95],
        ["Between 16.75 to 20", 67, 20, 67],
        ["Between 14 to 16.75", 218, 62, 218],
        ["Between 12 to 14", 164, 45, 164],
        ["Between 10 to 12", 173, 49, 173],
        ["Between 8 to 10", 85, 38, 85],
        ["Between 6 to 8", 32, 12, 32],
        ["Between 4 to 6", 14, 6, 14],
      ]);

      const options = {
        title: "",
        width: 1300,
        vAxis: {
          title: "Number of selections/Number of companies",
          viewWindow: {
            min: 0,
            max: 250,
          },
        },
        hAxis: { title: "Range of Gross Salary(Avg. Salary)" },
        seriesType: "bars",
        font: 20,
        series: { 2: { type: "line" } }, // Third column ("Adjusted Average") is rendered as a line
        titleTextStyle: {
          color: "#417341",
          fontSize: 20,
        },
      };

      const comboChart = new google.visualization.ComboChart(
        comboChartRef.current
      );
      comboChart.draw(data, options);
    };

    loadGoogleCharts();
  }, []);

  const salaryChartRef = useRef(null);

  useEffect(() => {
    const loadGoogleCharts = () => {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/charts/loader.js";
      script.async = true;
      script.onload = () => {
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawVisualization);
      };
      document.body.appendChild(script);
    };

    const drawVisualization = () => {
      const data = google.visualization.arrayToDataTable([
        ["Branch", "Registered", "Participated", "Placed"],
        ["Artificial Intelligence And Data Science", 84, 77, 57],
        ["Bio Engineering", 46, 38, 22],
        ["Chemical Engineering", 42, 31, 29],
        ["Civil Engineering", 38, 25, 19],
        ["Computer Science Engineering", 156, 145, 134],
        ["Electrical Engineering", 129, 116, 97],
        ["Engineering Science", 45, 36, 29],
        ["Material Engineering", 39, 27, 19],
        ["Mechanical Engineering", 76, 61, 49],
      ]);

      const options = {
        title: "",
        width: 1300,
        height: 500,
        vAxis: {
          title: "Number of Students",
          viewWindow: {
            min: 0,
            max: 200,
          },
        },
        hAxis: { title: "Branch" },
        seriesType: "bars",
      };

      const salaryChart = new google.visualization.ComboChart(
        salaryChartRef.current
      );
      salaryChart.draw(data, options);
    };

    loadGoogleCharts();
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 } // 10% of the section should be visible
    );

    const sections = document.querySelectorAll('.fade-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="wel-cell width-full">
        <img className="cdcImage" src={cdcImage}></img>
        <div className="welcome fade-section">Welcome to IIT JODHPUR</div>
        <div className="cell fade-section">Training and Placement Cell</div>
      </div>
      <div className="programs">
        <div className="title fade-section">
          <p className="acad">Academic Program</p>
        </div>
        <div className="ugpg">
          <div className="ug">
            <div className="btech fade-section">B.Tech</div>
            <div className="branch fade-section">Computer Science and Engineering</div>
            <div className="branch fade-section">Electrical Engineering</div>
            <div className="branch fade-section">Engineering Science</div>
            <div className="branch fade-section">
              Artificial Intelligence and Data Science
            </div>
            <div className="branch fade-section">Bioscience and Bioengineering</div>
            <div className="branch fade-section">Materials Engineering</div>
            <div className="branch fade-section">Mechanical Engineering</div>
            <div className="branch fade-section">Chemical Engineering</div>
            <div className="branch fade-section">Civil and Infrastucture Engineering</div>
            <div className="btech fade-section">MBA</div>
            <div className="branch fade-section">MBA (SME)</div>
            <div className="btech fade-section">M.Des</div>
            <div className="branch fade-section">Extended Reality(XR) Designs</div>
            <div className="btech fade-section">MSc</div>
            <div className="branch fade-section">Pyhsics</div>
            <div className="branch fade-section">Chemistry</div>
            <div className="branch fade-section">Mathematics</div>
            <div className="branch fade-section">Digital Humanities</div>
            <div className="branch fade-section">Computational Social Sciences</div>
          </div>
          <div className="ug">
            <div className="btech fade-section">M.Tech</div>
            <div className="branch fade-section">Computer Science and Engineering</div>
            <div className="branch fade-section">Data and Computational Sciences</div>
            <div className="branch fade-section">Cyber-Physical System</div>
            <div className="branch fade-section">
              Artificial Intelligence
            </div>
            <div className="branch fade-section">Sensors and Internet Of Things</div>
            <div className="branch fade-section">Intelligent Communication System</div>
            <div className="branch fade-section">Intelligent VLSI</div>
            <div className="branch fade-section">AR VR</div>
            <div className="branch fade-section">Advanced Manufacturing Design</div>
            <div className="branch fade-section">Thermofluids Engineering</div>
            <div className="branch fade-section">Materials Engineering</div>
            <div className="branch fade-section">Chemical engineering</div>
            <div className="branch fade-section">Bioscience and Bioengineering</div>
            <div className="branch fade-section">Infrastructure Engineering with specialization in Energy</div>
            <div className="branch fade-section">Robotics and Mobility Systems</div>
            <div className="branch fade-section">Quantum Technology</div>
            <div className="branch fade-section">Mechanical Engineering</div>
            <div className="branch fade-section">Chemical Engineering</div>
            <div className="branch fade-section">Civil and Infrastucture Engineering</div>
          </div>
        </div>
        <div className="ugpg">
          <div className="ug">
            <div className="btech fade-section">MSc-M.Tech</div>
            <div className="branch fade-section">MSc in Maths and M.Tech in Data & Computation</div>
            <div className="branch1 fade-section">MSc in Pysics and M.Tech in Materials Engineering</div>
          </div>
        </div>
      </div>
      <div className="columngraph fade-section">
          <p className="money1">
            No.of companies recruiting Campus Placement(Past 6 years)
          </p>
          <div
            id="columnchart_values"
            ref={columnChartRef}
            style={{ width: "900px", height: "300px" }}
          ></div>
        </div>
      <div className="salarybranch fade-section">
        <p className="money">
          Compensation-wise distribution of job offers(2022-2023)
        </p>
        <div
          className="branchwise"
          ref={salaryChartRef}
          style={{ width: "900px", height: "500px" }}
        />
      </div>
      <div className="donut fade-section">
        <p className="distri">Distribution of offers in different sectors</p>
        <div
          id="donutchart"
          className="donutpie"
          ref={donutChartRef}
          style={{ width: "900px", height: "500px" }}
        ></div>
      </div>
      <div className="combocolumn fade-section">
        <p className="distri1">Compensation-wise distribution of job offers</p>
        <div
          id="chart_div"
          className="combochart"
          ref={comboChartRef}
          style={{ width: "900px", height: "500px" }}
        ></div>
      </div>
      <div className="salaryAvg fade-section">
        <div className="median">Average Salary: 13.61 LPA</div>
        <div className="median">Median Salary: 15.51 LPA</div>
      </div>
      <div className="recruiters fade-section">
        <p className="pastRec text-3xl">
          Past Recruiters
        </p>
        <div className="companyName fade-section">
          <p>Amazon</p>
          <p>Wipro</p>
          <p>TCS</p>
          <p>Infosys</p>
          <p>Google</p>
          <p>PW</p>
          <p>KukuFm</p>
          <p>HDFC Bank</p>
          <p>Microsoft</p>
          <p>Cisco Systems</p>
          <p>Goldman Sachs</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CDCMain;
