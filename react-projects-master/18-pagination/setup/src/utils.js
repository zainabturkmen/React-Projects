const paginate = (followers) => {
    const itemPerPage = 10;
    const pages = Math.ceil(followers.length / itemPerPage)
    console.log(page);

    const newFallowers = Array.from({length:pages}, (_,index)=> {
        const start = index * itemPerPage;
        return followers.slice(start)
    });
}

export default paginate
