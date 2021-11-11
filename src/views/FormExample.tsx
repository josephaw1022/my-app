import React, { FC, useEffect, useState } from "react";
import { Navbar } from "@components/Navbar"
import TextField from '@mui/material/TextField';
import { MdClose } from "react-icons/md"
import IconButton  from '@mui/material/IconButton';
import { Link } from "react-router-dom";

export const FormExample: FC<any> = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    

    return (
        <div className="overflow-y-scroll">

            <Navbar title="hello world" icon={
                <>
                <Link to="">
                    <IconButton>
                        <MdClose className="text-white "/> 
                    </IconButton>
                    </Link>
                </>
            } />

            <div className="p-2 m-2 flex flex-col my-36">
                <h1 className=" text-blue-800 font-bold my-2 ">
                    Hello
                </h1>
                <div className="flex flex-row my-2 ">
                    <TextField
                        required
                        id="value"
                        label="Required"

                    />
                </div>
                <div className="flex flex-row my-2 ">
                    <TextField
                        required
                        id="value"
                        label="Required"

                    />
                </div>
                <div className="flex flex-row my-2 ">
                    <TextField
                        required
                        id="value"
                        label="Required"

                    />
                </div>
                <div className="flex flex-row my-2 ">
                    <TextField
                        required
                        id="value"
                        label="Required"

                    />
                </div>
                <div className="flex flex-row my-2 ">
                    <TextField
                        required
                        id="value"
                        label="Required"

                    />
                </div>
                <div className="flex flex-row my-2 ">
                    <TextField
                        required
                        id="value"
                        label="Required"

                    />
                </div>
                <div className="flex flex-row my-2 ">
                    <TextField
                        required
                        id="value"
                        label="Required"

                    />
                </div>
                <div className="flex flex-row my-2 ">
                    <TextField
                        required
                        id="value"
                        label="Required"

                    />
                </div>
                <div className="flex flex-row my-2 ">
                    <TextField
                        required
                        id="value"
                        label="Required"

                    />
                </div>
                <div className="flex flex-row my-2 ">
                    <TextField
                        required
                        id="value"
                        label="Required"

                    />
                </div>
                <div className="flex flex-row my-2 ">
                    <TextField
                        required
                        id="value"
                        label="Required"

                    />
                </div>
                <div className="flex flex-row my-2 ">
                    <TextField
                        required
                        id="value"
                        label="Required"

                    />
                </div>
                <div className="flex flex-row my-2 ">
                    <TextField
                        required
                        id="value"
                        label="Required"

                    />
                </div>
            </div>

            <div className="flex flex-row justify-end">

                <button className=" m-2 p-2  ">
                    hello
                </button>
            </div>
        </div>
    )
}