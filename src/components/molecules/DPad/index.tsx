import React from "react";
import DownButton from "../MobileButtons/Down";
import LeftButton from "../MobileButtons/Left";
import RightButton from "../MobileButtons/Right";
import UpButton from "../MobileButtons/Up";
import { DPadContainer } from "./styles";

const DPad = () => {
    return (
        <DPadContainer>
            <UpButton/>
            <div>
                <LeftButton/>
                <RightButton/>
            </div>
            <DownButton/>
        </DPadContainer>
    )
};

export default DPad;