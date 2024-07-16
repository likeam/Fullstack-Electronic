import { useEffect, useState } from "react"
import Container from "./ui/Container"
import { config } from "./config"
import { getData } from "./lib"


const HighLights = () => {
    const [highLightsData, setHighLightsData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const endpoint = `${config?.baseUrl}/highlights`;
            try {
                const data =await getData(endpoint);
                setHighLightsData(data);
            } catch (error) {
                console.error("Error fetching", error);
            }
        }
        fetchData();
    }, [])
    return (
        <Container>
            {
                highLightsData.map((item, index) =>{
                    
                })
            }
        </Container>
    )
    }

export default HighLights