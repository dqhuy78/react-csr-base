export const createAction = (actionType, actionPayload = null) => (
    {
        type: actionType,
        payload: actionPayload
    }
);
