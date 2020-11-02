import Axios from 'axios'
Axios.defaults.baseURL = 'http://10.0.32.22/zabbix/api_jsonrpc.php'
// Axios.defaults.baseURL = 'http://172.16.6.15/zabbix/api_jsonrpc.php'
Axios.defaults.timeout = 10000;
const token = 'd93f80f6651f7f28d19ec60ac46fabbc'
export function Zabbix (post) {
  return Axios.post('', post).then(data => data.data).catch(error => {
    // alert('zabbix 服务器断开,请检查!')
  })
}


export function login () {
  return Axios.post('', {
    "jsonrpc": "2.0",
    "method": "user.login",
    "params": {
      "user": "Admin",
      "password": "zabbix"
    },
    "id": 1,
    "auth": null
  }).then(data => data.data)
}

export function ZabbixServerCount (groundid) {
  return Axios.post('', {
    "jsonrpc": "2.0",
    "id": 2,
    "auth": token,
    "method": "host.get",
    "params": {
      "output": [],
      "groupids": groundid
    }
  }).then(data => data.data)
}

export function ZabbixServerAll (groundid) {
  return Axios.post('', {
    "jsonrpc": "2.0",
    "id": 2,
    "auth": token,
    "method": "host.get",
    "params": {
      "output": ["name", "host"],
      "groupids": groundid
    }
  }).then(data => data.data)
}

export function ZabbixFlowValue (itemid) {
  return Axios.post('', {
    "jsonrpc": "2.0",
    "method": "trend.get",
    "params": {
      "output": [
        "itemid",
        "clock",
        "num",
        "value_min",
        "value_avg",
        "value_max"
      ],
      "itemids": [
        itemid
      ],
      "sortfield": "clock",
      "sortorder": "DESC"
    },
    "auth": token,
    "id": 1
  }).then(data => data.data.result)
}
// 获取Cpu的键值
export function ZabbixGetCpuKey (hostid) {
  return Axios.post('', {
    "jsonrpc": "2.0",
    "id": 2,
    "auth": token,
    "method": "item.get",
    "params": {
      "output": ["itemid"],
      "hostids": hostid,
      "searchByAny": true,
      "search": {
        "name": ["CPU使用率"]
      }
    }
  }).then(data => data.data.result)
}

// 获取内存的键值
export function ZabbixGetMemKey (hostid) {
  return Axios.post('', {
    "jsonrpc": "2.0",
    "id": 2,
    "auth": token,
    "method": "item.get",
    "params": {
      "output": ["itemid"],
      "hostids": hostid,
      "searchByAny": true,
      "search": {
        "key_": ["system.swap.size[,pfree]"]
      }
    }
  }).then(data => data.data.result)
}
// 获取磁盘的键值
export function ZabbixGetCipanKey (hostid) {
  return Axios.post('', {
    "jsonrpc": "2.0",
    "id": 2,
    "auth": token,
    "method": "item.get",
    "params": {
      "output": ["itemid"],
      "hostids": hostid,
      "searchByAny": true,
      "search": {
        "key_": ["vfs.fs.size[/,pfree]"]
      }
    }
  }).then(data => data.data.result)
}
export function ZabbixGetKeyValue (itemid) {
  return Axios.post('', {
    "jsonrpc": "2.0",
    "id": 2,
    "auth": token,
    "method": "trend.get",
    "params": {
      "selectHosts": ["host"],
      "output": ["value_avg"],
      "itemids": itemid,
      "sortfield": "clock",
      "sortorder": "DESC",
    }
  }).then(data => data.data.result)
}

export function ZabbixFaultTime (time) {
  return Axios.post('', {
    "jsonrpc": "2.0",
    "method": "trigger.get",
    "params": {
      "output": "extend",
      "lastChangeSince": time,
      "sortfield": "priority",
      "sortorder": "DESC",
      "selectHosts": ["host"],
      "filter": {
        "value": 1
      },
    },
    "auth": "d93f80f6651f7f28d19ec60ac46fabbc",
    "id": 1
  }).then(data => data.data.result)
}
