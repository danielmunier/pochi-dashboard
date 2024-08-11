import { NextPage } from "next"
import { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"

export type Guild = {
    id: string,
    name: string,
    description: string,
    icon: string,
    owner: boolean,
    permissions: number,
    features: string[],
    permissions_new: string
}


export type NextPageLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsLayout = AppProps & {
    Component: NextPageLayout
}



export type Channel = {
    id: string,
    name: string,
    type: number,
    position: number,
    flags: number,
}


export type Role = {
    id: string,
    name: string,
    color: number,
    hoist: boolean,
    position: number,
    permissions: string,
    managed: boolean,
    mentionable: boolean,
}