import { Divider, Typography } from "antd";
import React from "react";

const CardDetails = () => {
  return (
    <div>
      <Typography>Details</Typography>
      <Divider></Divider>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography style={{ minWidth: "150px" }}>Department :</Typography>
          <Typography>BI</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography style={{ minWidth: "150px" }}>Status :</Typography>
          <Typography>To Do</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography style={{ minWidth: "150px" }}>Team :</Typography>
          <Typography>BI Mail</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography style={{ minWidth: "150px" }}>
            Task Description :
          </Typography>
          <Typography>BI Mail / Document Type</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography style={{ minWidth: "150px" }}>Scanned By :</Typography>
          <Typography>Laura Mercy</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography style={{ minWidth: "150px" }}>Assignee :</Typography>
          <Typography>Christopher</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography style={{ minWidth: "150px" }}>Priority :</Typography>
          <Typography>High</Typography>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
