import React, { useEffect, useState } from 'react';
import GetApiCall from "../GetApi";
import Notiflix from "notiflix-react";
const TeaserModel =(props)=>{
    const [ teaserCollection, setTeaserCollection] = useState([]);
    const [ totalCollection, setTotalCollection] = useState(0);
    const [ current_index, setCurrent_index] = useState(0);
    const [ content, setContent] = useState('');

    useEffect( ()=>{
        if(props.is_show_teaser_model=== true){
            Notiflix.Loading.Init({
                svgColor: "#507dc0",
                //  #507dc0'
              }); 
              Notiflix.Loading.Dots()
          
            GetApiCall.getRequest("GetTeaserContentAllIds").then((results) => {
                results.json().then(data => ({
                    data: data,
                    status: results.status
                })
                ).then(res => {
                   if( res.data && res.data.data){
                    setTeaserCollection(res.data.data);
                    setTotalCollection(res.data.data.length);
                    getTeaserById(res.data.data[0].fld_id);
                   }
                    
                Notiflix.Loading.Remove();
                });
            });
        }
    },[props.is_show_teaser_model]);

    function getTeaserById( teaser_id){
        Notiflix.Loading.Init({
            svgColor: "#507dc0",
            //  #507dc0'
          }); 
          Notiflix.Loading.Dots()
        GetApiCall.getRequest("GetTeaserContentById?contentid="+teaser_id).then((results) => {
            results.json().then(data => ({
                data: data,
                status: results.status
            })
            ).then(res => {
               if( res.data && res.data.data){
                setContent(res.data.data);
               }
               Notiflix.Loading.Remove();
            });
        });
    }

    function gottoPrev(){
        if(current_index>0){
            getTeaserById( teaserCollection[current_index-1].fld_id );
            setCurrent_index(current_index-1)
        }
        
    }

    function gottoNext(){
        if(current_index < totalCollection-1){
            getTeaserById( teaserCollection[current_index+1].fld_id );
            setCurrent_index(current_index+1)
        }
        
    }

      return (
        <>
            <div class={"modal fade "+(props.is_show_teaser_model === true ? 'show':'hide')}  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Teaser</h5>
                            <button onClick={ ()=> props.closeTeaserModel()} class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body" >
                            <div class="col-md-12">
                                <div  dangerouslySetInnerHTML= {{__html: content !='' ? content.fld_content  : '' }}></div> 
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" disabled={ current_index===0? true : false } onClick={ ()=>gottoPrev()} class="btn btn-secondary" data-dismiss="modal">PREV {'<'}</button>
                            <button type="button" disabled={ current_index === (totalCollection-1 )? true :false} onClick={ ()=>gottoNext()} class="btn btn-primary">NEXT {'>'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
       )
    }
  
  

export default TeaserModel
