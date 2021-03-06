import jQuery from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import ServerStatus from "jsx/server-status";
import Sidebar from "jsx/sidebar";
import ScheduleForm from "jsx/schedule-form";
import ScheduleList from "jsx/schedule-list";
import {
  statusObservableTimer,
  addScheduleSubject, addScheduleResult, deleteScheduleSubject, deleteScheduleResult,
  updateScheduleStatusSubject, updateScheduleStatusResult,
  schedules, clusterNames
} from "observable";

jQuery(document).ready(function($){

  ReactDOM.render(
    React.createElement(ServerStatus, {statusObservableTimer}),
    document.getElementById('cr-server-status')
  );

  ReactDOM.render(
    React.createElement(Sidebar, {clusterNames}),
    document.getElementById('cr-sidebar')
  );

  ReactDOM.render(
    React.createElement(ScheduleForm, {clusterNames, addScheduleSubject, addScheduleResult}),
    document.getElementById('cr-schedule-form')
  );

  ReactDOM.render(
    React.createElement(ScheduleList, {
      schedules,
      deleteSubject: deleteScheduleSubject, deleteResult: deleteScheduleResult,
      updateStatusSubject: updateScheduleStatusSubject, updateStatusResult: updateScheduleStatusResult
    }),
    document.getElementById('cr-schedule-list')
  );
});
