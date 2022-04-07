import {  useGetHotelQuery } from "../../api/apiSlice"


const HotelInfo = (hotel_id) => {
    console.log(hotel_id.hotel_id)
    let { data, isSuccess, isLoading, isError } = useGetHotelQuery(hotel_id.hotel_id)
    isSuccess ? console.log(data) : console.log('R frere')
    if (isLoading) {
        return <p>Loading</p>;
    } else if (isSuccess) {
        return `${data.data.hotels.city}`
    } else if (isError) {
        return <p>error</p>
    }

}
export default HotelInfo