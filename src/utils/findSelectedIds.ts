export const findSelectedIds = (data: any[], target: number) => {
    const memo: any[] = [];
    const recr = (item: any, target: number) => {
        const { id, children } = item;
        if (id === target) {
            memo.push(id);
            return true;
        }
        let flag = false;
        children.forEach((c: any) => {
            if (recr(c, target)) {
                flag = true;
            }
        });
        if (flag) {
            memo.push(id);
            return true;
        }
        return false;
    };
    data.forEach((item) => {
        recr(item, target);
    });
    return memo.reverse();
};
