import React, { useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const UserHistory = () => {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const authToken = Cookies.get("auth");
      const response = await axios.get(
        "http://127.0.0.1:8000/accounts/history/",
        {
          headers: {
            Authorization: `Token ${authToken}`,
          },
        }
      );
      setHistory(response.data.history);
    };
    fetchData();
  }, [history]);
  return (
    <Layout>
      <div className="relative">
        <p className="text-center text-white text-2xl mt-20 pb-16 font-semibold">
          Diagnosis History
        </p>
        <div className="key={index} flex flex-col items-center max-w-2xl mb-4 mx-auto h-auto text-slate-100 rounded-md">
          {history ? (
            history.map((item, index) => (
              <div className="mb-4" key={index}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <h2 className="flex flex-row space-x-2">
                      <p>
                        <strong>Time Stamp:</strong>{" "}
                        {new Date(item.date).toLocaleDateString()}
                      </p>
                      <p>{new Date(item.date).toLocaleTimeString()}</p>
                    </h2>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="flex flex-col justify-center items-center">
                      <h2 className="text-2xl pb-8 font-semibold">
                        User ID: {item.user}
                      </h2>
                      <img
                        src={item.image}
                        alt="upload_image"
                        className="w-60 h-auto pb-4 border border-slate-200 shadow-md"
                      />
                      <p className="text-lg font-bold mt-3">
                        Classification:{" "}
                        <span className="text-lg font-normal">
                          {item.classification}
                        </span>{" "}
                      </p>
                      <p className="text-lg font-bold pb-6">
                        Confidence:{" "}
                        <span className="text-lg font-normal">
                          {item.confidence}
                        </span>
                      </p>
                      <p className="text-lg font-bold text-justify">
                        <p className="pb-1">Understanding Leaf Scald:</p>
                        <span className="text-lg font-normal">
                          {item.description}
                        </span>
                      </p>
                      <p className="text-lg font-bold text-justify">
                        <p className="pt-3 pb-1">
                          Recommended solutions for the disease:
                        </p>
                        <ul className="list-disc list-inside">
                          {item.solution.map((item, index) => (
                            <li key={index} className="text-lg font-normal">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </p>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))
          ) : (
            <p className="text-3xl text-white">No user history</p>
          )}
        </div>
        <div className="absolute left-[61%]">
        <Link to="/">
          <button className="text-white border border-white hover:bg-white hover:text-[#05202A] mb-20 py-2 px-8 rounded-md focus:outline-none focus:shadow-outline-blue">
            Diagnose More
          </button>
        </Link>
        </div>
      </div>
    </Layout>
  );
};

export default UserHistory;
