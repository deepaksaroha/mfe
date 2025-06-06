import { mount } from "dashboard/DashboardApp";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, []);

    return <div ref={ref} />;
};
