const mongoose = require('mongoose');
const express = require ('express');
const dtbase = require('./database');
const nt = require ('./notes.json');

const LoadDb = async()=>{
    dtbase.insertMany(nt);
    console.log("Completar!");
    console.log("Refresh");
}

LoadDb();