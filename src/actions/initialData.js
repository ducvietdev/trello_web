export const initialData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['column-1', 'column-2', 'column-3'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    title: 'To do column',
                    cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7'],
                    cards: [
                        {
                            id: 'card-1',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 1',
                            cover: 'https://scontent.fhan5-3.fna.fbcdn.net/v/t39.30808-6/295299993_3188942538026722_7155135845348812662_n.jpg?stp=cp1_dst-jpg_p720x720&_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=It30qhv5PZIAX8bvzjX&tn=0jeXl8VP4MpkvOY_&_nc_ht=scontent.fhan5-3.fna&oh=00_AT_m5Yu9t1pETu8gwT3SLIvQ_yG7KYwzpi41l8uNH2FSIg&oe=62FBD7B3'
                        },
                        { id: 'card-2', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 2', cover: null},
                        { id: 'card-3', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 3', cover: null},
                        { id: 'card-4', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 4', cover: null},
                        { id: 'card-5', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 5', cover: null},
                        { id: 'card-6', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 6', cover: null},
                        { id: 'card-7', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 7', cover: null},
                    ]
                },
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'Improgress Column',
                    cardOrder: ['card-8', 'card-9', 'card-10'],
                    cards: [
                        { id: 'card-8', boardId: 'board-1', columnId: 'column-2', title: 'Title of card 8', cover: null },
                        { id: 'card-9', boardId: 'board-1', columnId: 'column-2', title: 'Title of card 9', cover: null },
                        { id: 'card-10', boardId: 'board-1', columnId: 'column-2', title: 'Title of card 10', cover: null },
                    ]
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'Done Column',
                    cardOrder: ['card-11', 'card-12', 'card-13'],
                    cards: [
                        { id: 'card-11', boardId: 'board-1', columnId: 'column-3', title: 'Title of card 11', cover: null },
                        { id: 'card-12', boardId: 'board-1', columnId: 'column-3', title: 'Title of card 12', cover: null },
                        { id: 'card-13', boardId: 'board-1', columnId: 'column-3', title: 'Title of card 13', cover: null },
                    ]
                }
            ]
        }
    ]
}