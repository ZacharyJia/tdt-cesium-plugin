import protobuf from "protobufjs"

export function loadProto(str) {
    return protobuf.parse(str)
}
