"use client";
import { Tab, Tabs } from "@nextui-org/react";

interface PropsTabs {
    tabContainer: {
        title: string,
        component: JSX.Element
    }[];
    defaultSelectedKey?: Number | undefined;
    variant?: "light" | "underlined" | "solid" | "bordered" | undefined;
}
export default function TabContainer({ tabContainer, defaultSelectedKey = 0, variant = "underlined" }: PropsTabs) {
    return (
        <div className="flex w-full flex-col">
            <Tabs aria-label="Options"
                defaultSelectedKey={defaultSelectedKey.toString()}
                variant={variant}>
                {tabContainer.map(({ title, component }, key) =>
                    <Tab key={key} title={title}>

                     
                        {component}
                    </Tab>
                )}
            </Tabs>
        </div>
    );
};
