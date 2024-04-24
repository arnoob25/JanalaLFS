import { DATA_TABLE, SIMULATION, VIDEO } from "@/test_data/test_db";
import { useEffect, useState } from "react";

export default function useMedia(inquiry) {
    const [allMedia, setAllMedia] = useState([]);
    const [switchMethod, setSwitchMethod] = useState(undefined)

    useEffect(() => {
        const switchMethod = inquiry.media_switch_method || undefined

        const videos = VIDEO.filter((item) => item.inquiry === inquiry.id);
        const simulations = SIMULATION.filter((item) => item.inquiry === inquiry.id);
        const dataTables = DATA_TABLE.filter((item) => item.inquiry === inquiry.id);

        const unorderedMedia = [...videos, ...simulations, ...dataTables];
        const orderedMedia = unorderedMedia.sort((a, b) => a.order - b.order);

        setAllMedia(orderedMedia)

        // switch method is provided and more than one media exists 
        if (switchMethod && orderedMedia && orderedMedia.length > 1) {
            setSwitchMethod(switchMethod)
        }

    }, [inquiry]);

    return [allMedia, switchMethod]
}