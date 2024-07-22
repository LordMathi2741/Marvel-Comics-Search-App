import http from "../service/http-common.service";

class ComicService{
    static getComicByIssueTitle(issueTitle){
        const encodedIssueTitle = encodeURIComponent(issueTitle);
        return http.get(`/comics/issueTitle/${encodedIssueTitle}`);
    }
}

export default ComicService;