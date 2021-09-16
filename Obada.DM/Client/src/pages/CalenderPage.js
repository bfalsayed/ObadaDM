import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Calender from "../components/Calender";
import SimpleCard from "../components/Card/Card";
import axios from "axios";
import moment from "moment";

const useStyles = makeStyles({
    infoItem: {
        marginBottom: 5
    },
    infoItemKey: {
        fontWeight: "bold",
        fontSize: 15,
        marginRight: 5
    },
    infoItemValue: {
        fontSize: 15,
        marginRight: 5
    }
});

const CalenderPage = ({pathname}) => {
    const [calender, setCalender] = useState(null);

    useEffect(() => {
        axios.get(`/ProfessorsCalender`).then(res => {
            const entries = Object.entries(res.data);

            const groups = [];
            let i = 0;
            entries.forEach(entry => {
                groups.push({id: i, title: entry[0]});
                i++;
            })

            const items = [];
            entries.forEach(entry => {
                entry[1].forEach(item => {
                    items.push({id: item.itemId, group: groups.find(t => t.title === entry[0]).id, title: item.title, start_time: moment(item.startDate), end_time: moment(item.endDate)})
                })
            })
            setCalender({groups, items})
        })

    }, []);

    return (
        <div>
            <SimpleCard title={"Calender"} >
                {calender && <Calender calender={calender}/>}
            </SimpleCard>
        </div>
    );
};

export default CalenderPage;
