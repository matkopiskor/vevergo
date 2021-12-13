export const findUrlCategories = (data: any[], target: any) => {
    const memo: any[] = [];
    const recr = (item: any, target: any) => {
        const { id, name, children } = item;
        if (id === target) {
            memo.push(name);
            return true;
        }
        let flag = false;
        children.forEach((c: any) => {
            if (recr(c, target)) {
                flag = true;
            }
        });
        if (flag) {
            memo.push(name);
            return true;
        }
        return false;
    };
    data.forEach((item) => {
        recr(item, target);
    });
    return memo.reverse();
};
