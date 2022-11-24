"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteraVote__factory = exports.IVoteraVote__factory = exports.ICommonsStorage__factory = exports.ICommonsBudget__factory = exports.CommonsStorage__factory = exports.CommonsBudget__factory = exports.IERC165__factory = exports.Ownable__factory = exports.factories = void 0;
exports.factories = __importStar(require("./factories"));
var Ownable__factory_1 = require("./factories/@openzeppelin/contracts/access/Ownable__factory");
Object.defineProperty(exports, "Ownable__factory", { enumerable: true, get: function () { return Ownable__factory_1.Ownable__factory; } });
var IERC165__factory_1 = require("./factories/@openzeppelin/contracts/utils/introspection/IERC165__factory");
Object.defineProperty(exports, "IERC165__factory", { enumerable: true, get: function () { return IERC165__factory_1.IERC165__factory; } });
var CommonsBudget__factory_1 = require("./factories/contracts/CommonsBudget__factory");
Object.defineProperty(exports, "CommonsBudget__factory", { enumerable: true, get: function () { return CommonsBudget__factory_1.CommonsBudget__factory; } });
var CommonsStorage__factory_1 = require("./factories/contracts/CommonsStorage__factory");
Object.defineProperty(exports, "CommonsStorage__factory", { enumerable: true, get: function () { return CommonsStorage__factory_1.CommonsStorage__factory; } });
var ICommonsBudget__factory_1 = require("./factories/contracts/ICommonsBudget__factory");
Object.defineProperty(exports, "ICommonsBudget__factory", { enumerable: true, get: function () { return ICommonsBudget__factory_1.ICommonsBudget__factory; } });
var ICommonsStorage__factory_1 = require("./factories/contracts/ICommonsStorage__factory");
Object.defineProperty(exports, "ICommonsStorage__factory", { enumerable: true, get: function () { return ICommonsStorage__factory_1.ICommonsStorage__factory; } });
var IVoteraVote__factory_1 = require("./factories/contracts/IVoteraVote__factory");
Object.defineProperty(exports, "IVoteraVote__factory", { enumerable: true, get: function () { return IVoteraVote__factory_1.IVoteraVote__factory; } });
var VoteraVote__factory_1 = require("./factories/contracts/VoteraVote__factory");
Object.defineProperty(exports, "VoteraVote__factory", { enumerable: true, get: function () { return VoteraVote__factory_1.VoteraVote__factory; } });
