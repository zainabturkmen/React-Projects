const paginate = (followers) => {
    const itemPerPage = 10;
    const page = Math.ceil(followers.length / itemPerPage)
    console.log(page);
}

export default paginate
