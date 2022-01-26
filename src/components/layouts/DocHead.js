import Head from "next/head"
import { useAppConfig } from "../providers/AppConfigProvider"

export default function DocHead({ title }) {
    const { config } = useAppConfig()

    return (
        <Head>
            <title>
                {title ? title + " | " : null}
                {config.name}
            </title>
        </Head>
    )
}
