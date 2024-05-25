// src/components/LanguageSwitcher.tsx
import { Select } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Flag from "react-world-flags";

const LanguageSwitcher: React.FC = () => {
    const countries = [
        { code: "cn", name: "繁體中文" },
        { code: "us", name: "English" },
    ];
    const country_item = countries.map((item) => {
        return {
            value: item.code,
            label: (
                <div className="flex">
                    <Flag
                        code={item.code}
                        style={{ width: "23px", marginRight: "10px" }}
                    />{" "}
                    {item.name}
                </div>
            ),
        };
    });
    const { i18n } = useTranslation();

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
        i18n.changeLanguage(value);
    };
    return (
        <Select
            dropdownAlign={{ offset: [0, 30] }}
            className="border-none"
            defaultValue="us"
            style={{ width: "auto" }}
            onChange={handleChange}
            options={country_item}
        />
    );
};

export default LanguageSwitcher;
