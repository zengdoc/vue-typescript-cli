import request from './index';

export function getExample() {
    return request.get(
        `/example`,
    );
}
