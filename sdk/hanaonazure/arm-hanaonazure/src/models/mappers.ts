/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        readOnly: true,
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const HardwareProfile: msRest.CompositeMapper = {
  serializedName: "HardwareProfile",
  type: {
    name: "Composite",
    className: "HardwareProfile",
    modelProperties: {
      hardwareType: {
        readOnly: true,
        serializedName: "hardwareType",
        type: {
          name: "String"
        }
      },
      hanaInstanceSize: {
        readOnly: true,
        serializedName: "hanaInstanceSize",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Disk: msRest.CompositeMapper = {
  serializedName: "Disk",
  type: {
    name: "Composite",
    className: "Disk",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      diskSizeGB: {
        serializedName: "diskSizeGB",
        type: {
          name: "Number"
        }
      },
      lun: {
        readOnly: true,
        serializedName: "lun",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const StorageProfile: msRest.CompositeMapper = {
  serializedName: "StorageProfile",
  type: {
    name: "Composite",
    className: "StorageProfile",
    modelProperties: {
      nfsIpAddress: {
        readOnly: true,
        serializedName: "nfsIpAddress",
        type: {
          name: "String"
        }
      },
      osDisks: {
        serializedName: "osDisks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Disk"
            }
          }
        }
      }
    }
  }
};

export const OSProfile: msRest.CompositeMapper = {
  serializedName: "OSProfile",
  type: {
    name: "Composite",
    className: "OSProfile",
    modelProperties: {
      computerName: {
        serializedName: "computerName",
        type: {
          name: "String"
        }
      },
      osType: {
        readOnly: true,
        serializedName: "osType",
        type: {
          name: "String"
        }
      },
      version: {
        readOnly: true,
        serializedName: "version",
        type: {
          name: "String"
        }
      },
      sshPublicKey: {
        serializedName: "sshPublicKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IpAddress: msRest.CompositeMapper = {
  serializedName: "IpAddress",
  type: {
    name: "Composite",
    className: "IpAddress",
    modelProperties: {
      ipAddress: {
        serializedName: "ipAddress",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NetworkProfile: msRest.CompositeMapper = {
  serializedName: "NetworkProfile",
  type: {
    name: "Composite",
    className: "NetworkProfile",
    modelProperties: {
      networkInterfaces: {
        serializedName: "networkInterfaces",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IpAddress"
            }
          }
        }
      },
      circuitId: {
        readOnly: true,
        serializedName: "circuitId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HanaInstance: msRest.CompositeMapper = {
  serializedName: "HanaInstance",
  type: {
    name: "Composite",
    className: "HanaInstance",
    modelProperties: {
      ...Resource.type.modelProperties,
      hardwareProfile: {
        serializedName: "properties.hardwareProfile",
        type: {
          name: "Composite",
          className: "HardwareProfile"
        }
      },
      storageProfile: {
        serializedName: "properties.storageProfile",
        type: {
          name: "Composite",
          className: "StorageProfile"
        }
      },
      osProfile: {
        serializedName: "properties.osProfile",
        type: {
          name: "Composite",
          className: "OSProfile"
        }
      },
      networkProfile: {
        serializedName: "properties.networkProfile",
        type: {
          name: "Composite",
          className: "NetworkProfile"
        }
      },
      hanaInstanceId: {
        readOnly: true,
        serializedName: "properties.hanaInstanceId",
        type: {
          name: "String"
        }
      },
      powerState: {
        readOnly: true,
        serializedName: "properties.powerState",
        type: {
          name: "String"
        }
      },
      proximityPlacementGroup: {
        readOnly: true,
        serializedName: "properties.proximityPlacementGroup",
        type: {
          name: "String"
        }
      },
      hwRevision: {
        readOnly: true,
        serializedName: "properties.hwRevision",
        type: {
          name: "String"
        }
      },
      partnerNodeId: {
        serializedName: "properties.partnerNodeId",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Display: msRest.CompositeMapper = {
  serializedName: "Display",
  type: {
    name: "Composite",
    className: "Display",
    modelProperties: {
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        readOnly: true,
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        readOnly: true,
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      origin: {
        readOnly: true,
        serializedName: "origin",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "Display"
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Tags: msRest.CompositeMapper = {
  serializedName: "Tags",
  type: {
    name: "Composite",
    className: "Tags",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const MonitoringDetails: msRest.CompositeMapper = {
  serializedName: "MonitoringDetails",
  type: {
    name: "Composite",
    className: "MonitoringDetails",
    modelProperties: {
      hanaSubnet: {
        serializedName: "hanaSubnet",
        type: {
          name: "String"
        }
      },
      hanaHostname: {
        serializedName: "hanaHostname",
        type: {
          name: "String"
        }
      },
      hanaDbName: {
        serializedName: "hanaDbName",
        type: {
          name: "String"
        }
      },
      hanaDbSqlPort: {
        serializedName: "hanaDbSqlPort",
        type: {
          name: "Number"
        }
      },
      hanaDbUsername: {
        serializedName: "hanaDbUsername",
        type: {
          name: "String"
        }
      },
      hanaDbPassword: {
        serializedName: "hanaDbPassword",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SapMonitor: msRest.CompositeMapper = {
  serializedName: "SapMonitor",
  type: {
    name: "Composite",
    className: "SapMonitor",
    modelProperties: {
      ...Resource.type.modelProperties,
      hanaSubnet: {
        serializedName: "properties.hanaSubnet",
        type: {
          name: "String"
        }
      },
      hanaHostname: {
        serializedName: "properties.hanaHostname",
        type: {
          name: "String"
        }
      },
      hanaDbName: {
        serializedName: "properties.hanaDbName",
        type: {
          name: "String"
        }
      },
      hanaDbSqlPort: {
        serializedName: "properties.hanaDbSqlPort",
        type: {
          name: "Number"
        }
      },
      hanaDbUsername: {
        serializedName: "properties.hanaDbUsername",
        type: {
          name: "String"
        }
      },
      hanaDbPassword: {
        serializedName: "properties.hanaDbPassword",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationList: msRest.CompositeMapper = {
  serializedName: "OperationList",
  type: {
    name: "Composite",
    className: "OperationList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      }
    }
  }
};

export const HanaInstancesListResult: msRest.CompositeMapper = {
  serializedName: "HanaInstancesListResult",
  type: {
    name: "Composite",
    className: "HanaInstancesListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "HanaInstance"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SapMonitorListResult: msRest.CompositeMapper = {
  serializedName: "SapMonitorListResult",
  type: {
    name: "Composite",
    className: "SapMonitorListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SapMonitor"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};