import React from 'react'

export async function loader({params}){
  //console.log(params);
  const {guitarrasUrl} = params;
  //console.log(guitarrasUrl);
  return  {}
}


function GuitarrasUrl() {
  return (
	<div>GuitarrasUrl</div>
  )
}

export default GuitarrasUrl