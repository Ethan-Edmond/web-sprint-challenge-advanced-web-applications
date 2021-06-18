import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

// import { editColorService, deleteColorService } from '../services/colorServices';
import fetchColorService from '../services/fetchColorService';
import axiosWithAuth from '../helpers/axiosWithAuth';

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchColorService()
      .then(res => {
        setColors(res.data)
      })
      .catch(alert);
  },[]);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    console.log(editColor);
    axiosWithAuth().put(`/colors/${editColor.id}`, editColor)
      .then(res => {
	const newColors = colors.map(color => {
	  if (color.id === editColor.id){
	    return editColor
	  } else {
	    return color
	  }
	});
	setColors(newColors);
      })
      .catch(alert);
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth().delete(`/colors/${colorToDelete.id}`)
      .then(res => {
	const newColors = colors.filter(color => color.id !== JSON.parse(res.data));
	setColors(newColors);
	// I feel like I should put another axios call in here in the event that we get out of synch with the server
      })
      .catch(alert);
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete saveEdit, deleteColor functions
