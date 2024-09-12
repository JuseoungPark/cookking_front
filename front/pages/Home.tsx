import React, {useCallback, useEffect, useState} from 'react'
import Container from '../components/Container'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import Card from '../components/Card'

// GET
const useQuery = (url: string) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        axios.get(url)
            .then(result => {
                setData(result.data)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [loading, data, error])

    return {
        data, error, loading
    }
}

const useLazyQuery = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const call = async ({url, body}: {url: string, body: any}) => {
        try {
            setLoading(true);
            const result = await axios.get(url);
            setLoading(false);
            setData(result.data)
        } catch {
            setLoading(false);
            setError(error)
        }
    }

    return {
       data, loading, error, call
    }
}
function Home() {
    // const {data, loading, error} = useQuery("http://localhost:8080/api/v1/exmaple/hello")
    const {data, loading, error, call} = useLazyQuery();

    const onClickHandler = useCallback(async () => {
        // await call({"", ""});
    }, [])
	const navigation = useNavigation()
	return (
		<Container>
			<Card />
		</Container>
	)
}

export default Home
