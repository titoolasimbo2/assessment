import { useHookstate } from "@hookstate/core";
import React from "react";
import { getData } from "../../services/questions";
import store from "../../store";

function Home() {
    useEffect(() => {
        getData()
    }, [])
    const { user } = useHookstate(store)
    return (
        " Hello" + user.displayName.get()
    )
}

export default Home
