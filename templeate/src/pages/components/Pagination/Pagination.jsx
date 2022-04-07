import React from "react";

const Pagination = () => {
    return (
        <>
            <div className='Paginationcontainer'>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="./Longin" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only"></span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="./Longin">1</a></li>
                        <li class="page-item"><a class="page-link" href="./Longin">2</a></li>
                        <li class="page-item"><a class="page-link" href="./Longin">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="/" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only"></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Pagination;