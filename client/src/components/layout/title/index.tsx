import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import { logo, mth } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src={mth} alt="Men-Tell Health" width="28px" />
                ) : (
                    <img src={mth} alt="Men-Tell Health" width="140px" />
                )}
            </Link>
        </Button>
    );
};