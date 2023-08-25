import React from 'react';
import { Watermark } from 'antd';
import { Outlet } from 'react-router';
import { connect } from 'react-redux';
const App = (props) => (
    <Watermark content={props.name} zIndex={0} style={{
        display: "table-cell",
        height:"100%",
    }}>
        <div
            style={{
                height: '100%',
            }}
        >
            <Outlet />
        </div>
    </Watermark>
);
export default connect(state=>state.user,{})(App);