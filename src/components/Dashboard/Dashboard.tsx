import { Header } from "../../features/components/Header/Header";
import { Footer } from '../../features/components/Footer/Footer';
import { Table } from '../../features/Table/screens/Table/Table';
import { global } from '../../styles/global';


export function Dashboard(){
    const Style = global
    return (
        <Style>
        <Header/>
        <h1>Hello, this is the Dashboard</h1>
        <Table/>
        <Footer/>
        </Style>
    )
}