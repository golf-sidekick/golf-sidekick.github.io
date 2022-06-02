import { debounce } from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import {useAuthContext} from 'services/auth'
import {useConfig} from 'services/config'

const useIsUnique = (name: string) => {

    const config = useConfig()
    const url = config.getString('ApiUrl')
    const auth = useAuthContext()
    const [state, setState] = useState({
        loading: false,
        isUnique: true
    })
    const [loading, setLoading] = useState(false)

    const verify = useCallback(debounce(async (name) => {
        if(!name) return
        
        setState({
            loading: true,
            isUnique: true
        })

        const token = await auth.getToken()
        const response = await fetch(`${url}api/v1/courses/uniqueness?name=${name}`, {
            headers: {
            Authorization: `Bearer ${token}`
            }
        })
        
        setState({
            loading: false,
            isUnique: response.status === 200
        })
    }, 200), []);

    useEffect(() => {
        verify(name)
    }, [name])

    return state
}

export default useIsUnique