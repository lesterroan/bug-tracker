const processDate = (date) => {
    const event = new Date(date);

    return event.toDateString();
}

export default processDate;