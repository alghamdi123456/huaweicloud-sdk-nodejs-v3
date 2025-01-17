import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class ErRegion {
    public static CN_SOUTH_1 = new Region("cn-south-1", "https://er.cn-south-1.myhuaweicloud.com");
    public static AP_SOUTHEAST_2 = new Region("ap-southeast-2", "https://er.ap-southeast-2.myhuaweicloud.com");
    

    private static STATIC_FIELDS = ErRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("cn-south-1", ErRegion.CN_SOUTH_1);
        map.set("ap-southeast-2", ErRegion.AP_SOUTHEAST_2);
        return map;
    }
    public static valueOf(regionId: String) {
        if (!regionId) {
          throw new Error("Unexpected empty parameter: regionId.");
        }
        const result = this.STATIC_FIELDS.get(regionId);
        if (result) {
          return result;
        }
        throw new Error(`Unexpected regionId: ${regionId}.`)
    }
}
