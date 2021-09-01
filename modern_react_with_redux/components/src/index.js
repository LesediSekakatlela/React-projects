import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 5:52PM"
                    content="Nice blog post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Jack"
                    timeAgo="Today at 3:00AM"
                    content="The subject is interesting"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Paul"
                    timeAgo="Yesterday at 6:30PM"
                    content="I like the stracture"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

        </div>
    );
};

ReactDom.render(
    <App />,
    document.querySelector('#root')
);