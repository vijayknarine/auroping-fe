import React, {useState} from 'react'
import {apiclient} from "../utils/ApiClient";


const EndpointForm = () =>{

    const [name, setName] = useState("")
    const [url, setUrl] = useState("")
    const [description, setDescription] = useState("")

    const resetAll = () =>{
        setName("")
        setUrl("")
        setDescription("")
    }

    const createEndpoint = async ()  =>{
        let {data} =await apiclient.createEndpoint({name: name, url: url, description: description})
        resetAll()
    }

    return(
        <div>
            <div>
                <label>Name</label>
                <input type="text" onChange={event => setName(event.target.value)} value={name}></input>
            </div>
            <div>
                <label>URL</label>
                <input type="text" onChange={event => setUrl(event.target.value)} value={url}></input>
            </div>
            <div>
                <label>Description</label>
                <input type="text" onChange={event => setDescription(event.target.value)} value={description}></input>
            </div>
            <div>
                <button onClick={createEndpoint}>Create</button>
            </div>
        </div>
    )

}