import {useSession} from "next-auth/react";

// test commit

export default function Guard({children}) {

    const { data: session } = useSession()

    if (!session) return false

    return children
}